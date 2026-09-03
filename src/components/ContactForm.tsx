import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { courses } from "@/data/courses";
import { site } from "@/config/site";

type FieldName =
  | "studentName"
  | "parentName"
  | "mobile"
  | "email"
  | "className"
  | "board"
  | "program"
  | "message";

type FormValues = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;

const initialValues: FormValues = {
  studentName: "",
  parentName: "",
  mobile: "",
  email: "",
  className: "",
  board: "",
  program: "",
  message: "",
};

const MOBILE_RE = /^(?:\+?91[\s-]?)?[6-9]\d{9}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: FormValues): Errors {
  const errors: Errors = {};
  if (!values.studentName.trim()) errors.studentName = "Student name is required.";
  if (!values.parentName.trim()) errors.parentName = "Parent name is required.";
  const mobile = values.mobile.replace(/[\s-]/g, "");
  if (!mobile) errors.mobile = "Mobile number is required.";
  else if (!MOBILE_RE.test(mobile))
    errors.mobile = "Enter a valid 10-digit Indian mobile number.";
  if (!values.email.trim()) errors.email = "Email is required.";
  else if (!EMAIL_RE.test(values.email.trim()))
    errors.email = "Enter a valid email address.";
  if (!values.className) errors.className = "Please select a class.";
  if (!values.board) errors.board = "Please select a board.";
  if (!values.program) errors.program = "Please select a program.";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const set = (name: FieldName) => (value: string) =>
    setValues((prev) => ({ ...prev, [name]: value }));

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setStatusMessage("Please correct the highlighted fields and try again.");
      return;
    }

    if (!site.enquiryWebhookUrl) {
      setStatus("error");
      setStatusMessage(
        "Enquiry submission is not connected yet. Please contact the academy directly using the details on this page.",
      );
      return;
    }

    setStatus("submitting");
    setStatusMessage("");
    try {
      const response = await fetch(site.enquiryWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setStatus("success");
      setStatusMessage("Thank you — your enquiry has been sent. We'll be in touch shortly.");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setStatusMessage("We couldn't send your enquiry. Please try again or call the academy.");
    }
  }

  const busy = status === "submitting";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="studentName"
          label="Student name"
          value={values.studentName}
          onChange={set("studentName")}
          error={errors.studentName}
          autoComplete="name"
        />
        <Field
          id="parentName"
          label="Parent name"
          value={values.parentName}
          onChange={set("parentName")}
          error={errors.parentName}
        />
        <Field
          id="mobile"
          label="Mobile number"
          type="tel"
          placeholder="10-digit mobile number"
          value={values.mobile}
          onChange={set("mobile")}
          error={errors.mobile}
          autoComplete="tel"
        />
        <Field
          id="email"
          label="Email"
          type="email"
          value={values.email}
          onChange={set("email")}
          error={errors.email}
          autoComplete="email"
        />
        <SelectField
          id="className"
          label="Class"
          value={values.className}
          onChange={set("className")}
          error={errors.className}
          options={["Class IX", "Class X"]}
        />
        <SelectField
          id="board"
          label="Board"
          value={values.board}
          onChange={set("board")}
          error={errors.board}
          options={["CBSE", "ICSE"]}
        />
        <div className="sm:col-span-2">
          <SelectField
            id="program"
            label="Program interested in"
            value={values.program}
            onChange={set("program")}
            error={errors.program}
            options={courses.map((c) => c.title)}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="message">Message (optional)</Label>
        <Textarea
          id="message"
          rows={4}
          className="mt-2"
          value={values.message}
          onChange={(e) => set("message")(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={busy}>
          {busy ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            "Send enquiry"
          )}
        </Button>
        <p
          role="status"
          aria-live="polite"
          className={
            status === "success"
              ? "text-sm text-accent-foreground"
              : "text-sm text-destructive"
          }
        >
          {statusMessage}
        </p>
      </div>
    </form>
  );
}

interface FieldProps {
  id: FieldName;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string | undefined;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  autoComplete,
}: FieldProps) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder ?? ""}
        autoComplete={autoComplete ?? "off"}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2"
      />
      <FieldError id={id} message={error} />
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  onChange,
  error,
  options,
}: {
  id: FieldName;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string | undefined;
  options: string[];
}) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <select
        id={id}
        value={value}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
      >
        <option value="">Select…</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <FieldError id={id} message={error} />
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string | undefined }) {
  if (!message) return null;
  return (
    <p id={`${id}-error`} className="mt-1.5 text-xs text-destructive">
      {message}
    </p>
  );
}

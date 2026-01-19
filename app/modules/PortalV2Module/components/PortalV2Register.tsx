import { Button } from "~/components/ui/button";
import { DialogTrigger } from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { BOXES, boxStyle } from "~/modules/PortalV2Module/layout";

const fields = [
  { key: "name", label: "Nama Lengkap", box: BOXES.inputName },
  { key: "nickname", label: "Nama Panggilan", box: BOXES.inputNickname },
  { key: "phone", label: "No. HP/WA", box: BOXES.inputPhone },
  { key: "email", label: "Email", box: BOXES.inputEmail },
  { key: "password", label: "Password", box: BOXES.inputPassword },
  {
    key: "passwordConfirm",
    label: "Konfirmasi Password",
    box: BOXES.inputPasswordConfirm,
  },
];

export function PortalV2Register() {
  return (
    <>
      <div
        id="register"
        className="absolute font-xilosa text-font-light"
        style={{
          ...boxStyle(BOXES.registerTitle),
          fontSize: "32px",
          lineHeight: "34px",
          textAlign: "center",
        }}
      >
        Daftar BETIS
      </div>
      <div
        className="absolute font-xilosa text-font-light"
        style={{
          ...boxStyle(BOXES.registerHeading),
          fontSize: "54px",
          lineHeight: "44px",
          textAlign: "center",
        }}
      >
        Register
      </div>
      {fields.map((field) => (
        <div
          key={field.key}
          className="absolute"
          style={boxStyle(field.box)}
        >
          <Label className="text-[12px] leading-[14px] text-font-light">
            {field.label} <span className="text-feedback-error">*</span>
          </Label>
          <Input
            type={field.key.includes("password") ? "password" : "text"}
            className="mt-2 h-9 w-full rounded-xl border border-stroke-light bg-background-light px-4 text-[12px] text-font-dark shadow-none placeholder:text-font-dark/50"
            placeholder="Type here"
          />
        </div>
      ))}
      <div className="absolute" style={boxStyle(BOXES.registerButton)}>
        <DialogTrigger asChild>
          <Button variant="secondary" className="h-full w-full text-s7">
            Register
          </Button>
        </DialogTrigger>
      </div>
      <div
        className="absolute text-center text-font-light"
        style={{
          ...boxStyle(BOXES.registerFooter),
          fontSize: "14px",
          lineHeight: "18px",
        }}
      >
        Already have an account?
        <br />
        <span className="text-font-dark-green">Login</span>
      </div>
    </>
  );
}

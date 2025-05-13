import LoginForm from "../LoginForm";

export default function Header() {
  return (
    <header
      className="flex items-center p-4
    justify-between h-40 bg-amber-300"
    >
      <h1 className="text-5xl font-bold">Blog</h1>
      <div>
        <LoginForm></LoginForm>
      </div>
    </header>
  );
}

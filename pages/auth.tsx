import { useCallback, useState } from "react";
import Input from "@/components/Input";
import Image from "next/image";

const Auth = () => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [variant, setVariant] = useState("login");

	const toggleVariant = useCallback(() => {
		setVariant((prev) => (prev === "login" ? "signup" : "login"));
	}, []);
	return (
		<div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
			<div className="bg-black w-full h-full lg:bg-opacity-50">
				<nav className="px-12 py-5">
					<Image src="/images/logo.png" alt="Netflix-logo" className="h-12" width={120} height={40} />
				</nav>
				<div className="flex justify-center">
					<div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
						<h2 className="text-white text-4xl mb-8 font-semibold">{variant === "login" ? "Sign In" : "Register"}</h2>
						<div className="flex flex-col gap-4">
							{variant === "signup" && <Input label="Username" onChange={(ev: any) => setName(ev.target.value)} id="name" value={name} />}
							<Input label="Email" onChange={(ev: any) => setEmail(ev.target.value)} id="email" type="email" value={email} />
							<Input label="Password" onChange={(ev: any) => setPassword(ev.target.value)} id="password" type="password" value={password} />{" "}
							{variant === "signup" && (
								<Input
									label="Confirm Password"
									onChange={(ev: any) => setConfirmPassword(ev.target.value)}
									id="confirmPassword"
									type="password"
									value={confirmPassword}
								/>
							)}
						</div>
						<button
							className={`${
								password !== confirmPassword ? "bg-gray-400 cursor-not-allowed" : "bg-red-700 hover:bg-customRed"
							} py-3 text-white rounded-md mt-10 w-full transition`}
							disabled={password !== confirmPassword}
						>
							{variant === "login" ? "Sign In" : "Sign Up"}
						</button>
						<p className="text-neutral-500 mt-12 flex justify-between ">
							{variant === "login" ? "New to Netflix?" : "Already a user?"}
							<span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
								{variant === "signup" ? "Sign In Now" : "Sign Up Now"}
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Auth;

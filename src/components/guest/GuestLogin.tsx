import { useState } from "react";

export const GuestLogin = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  return (
    <section>
      <div className="flex flex-col gap-10 text-center my-36">
        <h1 className="text-3xl font-semibold text-primary-100 tracking-tight">
          Sign in to access your guest area
        </h1>

        <div className="flex items-center justify-center">
          <button
            disabled={isLoggingIn}
            className="flex cursor-pointer items-center gap-4 md:gap-6 text-lg border border-primary-800 bg-primary-900/10 px-6 py-3.5 md:px-10 md:py-4 font-semibold text-primary-100 hover:bg-primary-900/30 hover:border-accent-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoggingIn ? (
              <div className="w-6 h-6 border-2 border-accent-400 border-r-transparent rounded-full animate-spin" />
            ) : (
              <img
                src="https://authjs.dev/img/providers/google.svg"
                alt="Google logo"
                height={24}
                width={24}
              />
            )}
            <span>
              {isLoggingIn ? "Signing in..." : "Continue with Google"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

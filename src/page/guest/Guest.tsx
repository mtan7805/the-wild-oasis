export const Guest = () => {
  return (
    <section>
      <div className="flex flex-col gap-10 text-center my-36">
        <h1 className="text-2xl ">Sign in to access your guest area</h1>

        <div className="flex items-center justify-center ">
          <button className="flex cursor-pointer items-center gap-4 md:gap-6 text-lg border border-primary-300 px-4 py-2 md:px-10 md:py-4 font-medium">
            <img
              src="https://authjs.dev/img/providers/google.svg"
              alt="Google logo"
              height={24}
              width={24}
            />
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </section>
  );
};

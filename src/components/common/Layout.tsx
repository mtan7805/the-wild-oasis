import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Footer } from "./Footer";

export default function RootLayout() {
  return (
    <>
      <title>The Wild Oasis Booking | Alamin (CodeWithAlamin)</title>
      <meta
        name="description"
        content="The Wild Oasis Booking | Alamin (CodeWithAlamin)"
      />
      <meta
        property="og:title"
        content="The Wild Oasis Booking | Alamin (CodeWithAlamin)"
      />
      <meta
        property="og:description"
        content="The Wild Oasis Booking | Alamin (CodeWithAlamin)"
      />
      <meta
        property="og:image"
        content="https://the-wild-oasis-booking-alamin.vercel.app/thumbnail.png"
      />

      <body
        className={`font-[Josefin_Sans]  antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />

        <div className="flex-1 px-8 py-6 grid">
          <main className="max-w-7xl mx-auto w-full">
            <Outlet />
          </main>
        </div>

        <Footer />
      </body>
    </>
  );
}

import BillingPageClient from "./BillingPageClient";

export async function generateStaticParams() {
  try {
    const res = await fetch(
      "https://tourapi.shreemwell.in/api/v1/booking/all"
    );

    const data = await res.json();

    if (!data?.success) {
      return [];
    }

    return data.data.map((booking) => ({
      bookingId: booking._id,
    }));
  } catch (error) {
    console.log(error);

    return [];
  }
}

export default function Page() {
  return <BillingPageClient />;
}
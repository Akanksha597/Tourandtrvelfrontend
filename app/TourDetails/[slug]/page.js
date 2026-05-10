












import TourDetailsClient from "./TourDetailsClient";

export async function generateStaticParams() {
  try {
    const res = await fetch(
      "https://tourapi.shreemwell.in/api/v1/favorite-tour/all-tours"
    );

    const data = await res.json();

    if (!data?.success) {
      return [];
    }

    return data.data.map((tour) => ({
      slug: tour.slug,
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default function Page() {
  return <TourDetailsClient />;
}
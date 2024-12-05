import Banner from "./components/banner/Banner";
import RootLayout from "./layout";

export default function Home(): JSX.Element {
  return (
    <RootLayout>
      <div className="bodyContainer">
        <div className="banner flex w-full h-[436px] justify-center lg:container lg:mx-auto">
          <Banner></Banner>
        </div>
      </div>
    </RootLayout>
  );
}

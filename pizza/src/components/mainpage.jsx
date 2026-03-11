import { Card } from "./card";
import { Head } from "./head";

export default function MainPage() {
  return (
    <div className="px-60">
      <Head />
      <div>
      <section className="bg-[url('./img/promo/pizza.png')]  ">
					<h1 className="">Онлайн-сервис <br />доставки еды на дом</h1>
					<p className="">
						Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком
					</p>
				</section>
        
        {/* <Card /> */}
      </div>
    </div>
  );
}

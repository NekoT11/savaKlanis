import { Card } from "./card";
import { Head } from "./head";

export default function MainPage() {
  return (
    <div className="px-60">
      <Head />
      <div>
 <section className="container-promo">
				<section className="promo pizza">
					<h1 className="promo-title">Онлайн-сервис <br />доставки еды на дом</h1>
					<p className="promo-text">
						Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком
					</p>
				</section>
        </section>
        <Card />
      </div>
    </div>
  );
}

export function Head() {
  return (
  <div className="header">
			<a className="logo">
				<img src="img/icon/logo.svg" alt="Logo" />
			</a>
			<label className="address">
				<input type="text" className="input input-address" placeholder="Адрес доставки" />
			</label>
			<div className="buttons">
				<span className="user-name"></span>
				<button className="button button-primary button-auth">
					<span className="button-auth-svg"></span>
					<span className="button-text">Войти</span>
				</button>
        </div>
      </div>
  );
}

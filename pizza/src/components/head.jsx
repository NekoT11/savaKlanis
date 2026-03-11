export function Head() {
  return (
    <div className="w-full h-20 items-center flex justify-center">
      <header className="flex flex-row items-center justify-between w-full">
        <a>
          <img src="img/icon/logo.svg" alt="Logo" />
        </a>
        <input className="w-2/3 border border-gray-400 p-2 rounded-sm" type="text" placeholder="Адрес доставки" />
        <div>
          <button className="bg-blue-400 w-30 p-2 text-white rounded-sm">Войти</button>
        </div>
      </header>
    </div>
  );
}

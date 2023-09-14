import cls from "./Cart.module.css";

export const Cart = () => {
  return (
    <div className={cls.cartContainer}>
      <div className={cls.cartTop}>
        <p className={cls.cartTitle}>Корзина</p>
        <p className={cls.cartCounter}>Кол-во астероидов</p>
      </div>
      <div className={cls.cartBtnWrapper}>
        <button className={cls.cartBtn}>Отправить</button>
      </div>
    </div>
  )
}
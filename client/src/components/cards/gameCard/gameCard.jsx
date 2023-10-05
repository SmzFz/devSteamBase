import styles from './gameCard.module.css'
import Button from '../../forms/button/button'

const GameCard = (img,title,info,price) => {
  return (
    <div className={styles.gameCard}>
        <img src="https://placehold.co/600x400" alt="" width={300} height={145}/>
        <div className={styles.info}>
        <h3>Counter Strike: Global Offensive</h3>
        <p>Ação, Estratégoa, Multijogador</p>
        <div className={styles.pricing}>
            <h2>R$ 99,90</h2>
            <Button>Adicionar ao Carrinho</Button>

        </div>
        </div>
    </div>
  )
}

export default GameCard
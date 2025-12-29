import styles from './HeroBackground.module.css';

export default function HeroBackground() {
  return (
    <div className={styles.heroBackground}>
      {/* Grid pattern */}
      <div className={styles.heroGrid}></div>

      {/* Floating gradient orbs */}
      <div className={styles.heroOrb1}></div>
      <div className={styles.heroOrb2}></div>
      <div className={styles.heroOrb3}></div>

      {/* Mathematical symbols - multiplication theme */}
      <svg className={styles.heroSymbol1} viewBox="0 0 100 100">
        <text x="50" y="70" textAnchor="middle" fontSize="80" fill="rgba(255,255,255,0.08)">×</text>
      </svg>
      <svg className={styles.heroSymbol2} viewBox="0 0 100 100">
        <text x="50" y="70" textAnchor="middle" fontSize="60" fill="rgba(255,255,255,0.06)">+</text>
      </svg>

      {/* Geometric shapes */}
      <div className={styles.heroTriangle}></div>
      <div className={styles.heroSquare}></div>
      <div className={styles.heroHexagon}></div>
      <div className={styles.heroDiamond}></div>
      <div className={styles.heroCircle}></div>
      <div className={styles.heroCross}></div>

      {/* Pulsing rings */}
      <div className={styles.heroRing1}></div>
      <div className={styles.heroRing2}></div>
    </div>
  );
}

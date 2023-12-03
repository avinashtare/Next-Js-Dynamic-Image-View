import styles from './page.module.css'

export default function Home() {
  const htmlCode = `<img src='/image'></img>`;
  return (
    <main className={styles.main}>

      <div className={styles.description}>
        {/* ignore this code  */}
        <p>
          <code>
            {htmlCode}
          </code>
          {/* it's single url to load multiple images */}
          <a href='/image' target='_blank' className={styles.a}>Open Image Url to new tab</a>
        </p>
        <p>
          <img src='/image'></img>
        </p>
        <div>
        </div>
      </div>
    </main>
  )
}
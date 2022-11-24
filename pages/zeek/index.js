import Link from 'next/link';
import styles from '../../styles/Zeek.module.css'

export const getStaticProps = async () => {

    const respond = await fetch ('https://jsonplaceholder.typicode.com/users');
    const data = await respond.json();


    return {

        props: { zeeks: data}
    }
}

const Zeek = ({zeeks}) => {
    return ( 

    <div>
        <h1>All Zeek</h1>
        {zeeks.map(zeek => (
            <div key = {zeek.id}>
                <Link href={'/zeek/' + zeek.id} className={styles.single}>
                    <h3>{zeek.name}</h3>
                </Link>
            </div>
        ))}
    </div>
     );
}
 
export default Zeek;


export const getStaticPaths = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(zeek => {
        return{  
        params: { id: zeek.id.toString() }
            }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
        const id = context.params.id
        const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
        const data = await res.json();

        return {
            props: {zeek: data}
        }
}

const Details = ({zeek}) => {
    return ( 
        <div>
           <h1>{zeek.name}</h1>
           <p>{zeek.email}</p>
           <p>{zeek.website}</p>
           <p>{zeek.address.city}</p>
           
        </div>
     );
}
 
export default Details;
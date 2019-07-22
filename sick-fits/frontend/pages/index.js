import Items from '../components/Items'; 
import gql from 'graphql-tag';
import Title from '../components/styles/Title';

// best practice to put queries in caps`
const ALL_ITEMS_QUERY = gql`
    query ALL_ITEMS_QUERY {
        items {
            id
            title
            price
            description
            image
            largeImage
        }
    }
`;

const Home = (props) => (
    <div>
        <Items />  
    </div>
);

export default Home;
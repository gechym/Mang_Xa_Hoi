import { useParams } from 'react-router-dom';

function Profile() {
    const { nickName } = useParams();

    return <h1>{nickName}</h1>;
}

export default Profile;

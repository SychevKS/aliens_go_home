import CannonPipe from './Cannon-Pipe';
import CannonBase from './Cannon-Base';

export default function Cannon() {
    return(
        <>
            <CannonPipe rotation={45} />
            <CannonBase />
        </>
    )
}
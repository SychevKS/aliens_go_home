import CannonPipe from './Cannon-Pipe';
import CannonBase from './Cannon-Base';

export default function Cannon({angle}) {
    return(
        <>
            <CannonPipe rotation={angle} />
            <CannonBase />
        </>
    )
}
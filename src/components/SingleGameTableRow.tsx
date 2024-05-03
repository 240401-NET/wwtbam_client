import { Game } from "../models/Game";


interface propsInterface {
    data: Game,
    place: number
}

export function SingleGameTableRow(props: propsInterface) {
    let dateElement;
    if (props.data.playedAt === null) {
        dateElement = <td className="py-2 px-4 text-yellow-800"></td>
    } else {
        dateElement = <td className="py-2 px-4 text-yellow-800">{props.data.playedAt.substring(0, 10)}</td>
    }
    return (
        <>
        <tr>
            <th className="py-2 px-4 text-yellow-800">{props.place}</th>
            <td className="py-2 px-4 text-yellow-800">{props.data.createdBy.name}</td>
            <td className="py-2 px-4 text-yellow-800">{props.data.score}</td>
            {dateElement}
        </tr>
        </>
    )
}
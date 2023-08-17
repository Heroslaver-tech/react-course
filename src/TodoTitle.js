import { HiClipboardDocumentList } from "react-icons/hi2";
import "./todoTitle.css";

export default function TodoTitle() {
    return (
        <>
            <div className="container-todoTitle">
                <h1 className="title"><HiClipboardDocumentList className="icon-title" />Tareas</h1>
            </div>
        </>
    );
}

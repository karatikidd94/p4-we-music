import FileUpload from "../../components/FileUpload/FileUpload";
import MeFileUpload from "../../components/MeFileUpload/MeFileUpload";


export default function UploadPage({ user, profiles }) {


    return (
        <>
            <div>
                <FileUpload />
            </div>
            <div>
                <MeFileUpload />
            </div>
        </>
    );
}
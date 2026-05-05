import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { toast } from "react-toastify";
import { fetchAllRole, deleteRole } from "../../services/roleService";
import ModalRole from "./ModalRole";

const TableRole = forwardRef((props, ref) => {
    const [listRoles, setListRoles] = useState([]);

    const [isShowModalRole, setIsShowModalRole] = useState(false);
    const [dataModalRole, setDataModalRole] = useState({});

    const onHideModalRole = async () => {
        setIsShowModalRole(false);
        setDataModalRole({});
        await getAllRoles()
    }

    useEffect(() => {
        getAllRoles();
    }, [])

    useImperativeHandle(ref, () => ({
        fetListRolesAgain () {
            getAllRoles();
        }
    }));

    const getAllRoles = async () => {
        let data = await fetchAllRole();
        if(data && +data.EC === 0){
            setListRoles(data.DT);
        }
    }

    const handleEditRole = (role) => {
        setDataModalRole(role);
        setIsShowModalRole(true);
    }

    const handleDeleteRole= async (role) => {
        let data = await deleteRole(role);
        if(data && +data.EC === 0){
            toast.success(data.EM);
            await getAllRoles();
        }
    }
    return (<>
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">URL</th>
                    <th scope="col">Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {listRoles && listRoles.length > 0 ?
                <>
                    {listRoles.map((item, index) => {
                        return(
                            <tr key={`row-${index}`}>
                                <td>{item.id}</td>
                                <td>{item.url}</td>
                                <td>{item.description}</td>
                                <td>
                                    <button className="btn btn-warning mx-3" onClick={() => handleEditRole(item)}>
                                        <i className="fa fa-pencil"></i>
                                        Edit
                                    </button>
                                    <button className="btn btn-danger" onClick={() => handleDeleteRole(item)}>
                                        <i className="fa fa-trash"></i>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </>
                :
                <>
                    <tr><td colSpan={4}>Not found roles</td></tr>
                </>
                }
            </tbody>
        </table>
        <ModalRole 
            show={isShowModalRole} 
            onHide={onHideModalRole} 
            dataModalRole={dataModalRole} // Dữ liệu của role cần sửa
            // handleRefresh={getRoles}    // Hàm để load lại table sau khi update xong
        />
    </>)
})

export default TableRole;
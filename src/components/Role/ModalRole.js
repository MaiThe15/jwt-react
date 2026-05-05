import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState, useEffect, use } from 'react';
import { updateRole } from '../../services/roleService';
import { toast } from 'react-toastify';
import _ from 'lodash';

const ModalRole = (props) => {
    const {show, onHide, dataModalRole} = props;

    const defaultRoleData = {
        url: '',
        description: ''
    }
    const [roleData, setRoleData] = useState(defaultRoleData);
    useEffect(() => {
        if (dataModalRole && !_.isEmpty(dataModalRole)) {
            setRoleData({
                id: dataModalRole.id, // Lưu ID để dùng cho API update
                url: dataModalRole.url || '',
                description: dataModalRole.description || ''
            });
        }
    }, [dataModalRole])

    const handleOnChangeInput = (value, name) => {
        let _roleData = _.cloneDeep(roleData);
        _roleData[name] = value;
        setRoleData(_roleData);
    };

    const checkValidateInputs = () => {
        if (!roleData.url) {
            toast.error("URL is required!");
            return false;
        }
        return true;
    };

    const handleConfirmRole = async () => {
        let check = checkValidateInputs();
        if (check) {
            let res = await updateRole(roleData); // Gọi API update role
            
            if (res && res.EC === 0) {
                toast.success(res.EM);
                props.onHide();
                // Nếu cần load lại danh sách, hãy gọi callback từ cha ở đây
                // if(props.handleRefresh) await props.handleRefresh();
            } else {
                toast.error(res.EM);
            }
        }
    };

    const handleCloseModalRole = () => {
        setRoleData(defaultRoleData);
        onHide();
    };

    return (
        <Modal size="lg" show={show} onHide={handleCloseModalRole} centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    <span>Update Role</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='content-body row'>
                    <div className='col-12 col-sm-6 form-group mb-3'>
                        <label className='mb-1'>URL <span className='text-danger'>*</span>:</label>
                        <input 
                            className='form-control' 
                            type='text' 
                            value={roleData.url}
                            onChange={(event) => handleOnChangeInput(event.target.value, "url")}
                        />
                    </div>
                    <div className='col-12 col-sm-6 form-group mb-3'>
                        <label className='mb-1'>Description:</label>
                        <input 
                            className='form-control' 
                            type='text' 
                            value={roleData.description}
                            onChange={(event) => handleOnChangeInput(event.target.value, "description")}
                        />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModalRole}>Close</Button>
                <Button variant="warning" onClick={handleConfirmRole}>
                    Update
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalRole;
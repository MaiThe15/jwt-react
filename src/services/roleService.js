import axios from '../setup/axios';

const createRoles = (roles) => {
    return axios.post("/api/v1/role/create", [...roles])
}

const fetchAllRole = () => {
    return axios.get(`/api/v1/role/read`)
}

const updateRole = (roles) => {
    return axios.put("/api/v1/role/update", {...roles})
}

const deleteRole = (role) => {
    return axios.delete("/api/v1/role/delete", {data: {id: role.id}})
}

export { createRoles, fetchAllRole, updateRole, deleteRole };
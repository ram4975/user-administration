
export const updateProfileField = (id, value) => {
    return {
        type: 'UPDATE_PROFILE_FIELD',
        id,
        value
    }
}
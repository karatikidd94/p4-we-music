import * as profilesAPI from './profiles-api';

export async function profile(profileData) {
    const response = await profilesAPI.createProfile(profileData);
    return response;
}
import type {Gender} from '../enums/';

export type UserDto = {
    /**
     */
    'UserRepository/COMPLEX_FETCHER': {
        id: string;
        createdTime: string;
        editedTime: string;
        phone: string;
        password: string;
        nickname?: string | undefined;
        avatar?: string | undefined;
        gender?: Gender | undefined;
    }
    /**
     */
    'UserRepository/USER_ROLE_FETCHER': {
        id: string;
        createdTime: string;
        editedTime: string;
        phone: string;
        password: string;
        nickname?: string | undefined;
        avatar?: string | undefined;
        gender?: Gender | undefined;
        rolesView: Array<{
            id: string;
            name: string;
        }>;
    }
}

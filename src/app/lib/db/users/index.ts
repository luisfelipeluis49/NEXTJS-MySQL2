import { SelectQuery, ModifyQuery } from '../queryUtils';
import { RowDataPacket } from 'mysql2/promise';

export interface IUserRow extends RowDataPacket {
    id: number;
    name: string;
    email: string;
    created_at: string;
}

export function getAll() {
    return SelectQuery<IUserRow>('SELECT * FROM users;')
}

export function getOne(id: string, email: string) {
    const queryString = 'SELECT * FROM users WHERE id = ? AND email = ?;'
    return SelectQuery<IUserRow>(queryString, [id, email])
}
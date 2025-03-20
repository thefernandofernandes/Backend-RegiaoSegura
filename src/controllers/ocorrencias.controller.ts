import { Request, Response } from 'express';
import pool from '../config/database';

export const getOcorrencias = async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM ocorrencias ');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar ocorrências' });
    }
};

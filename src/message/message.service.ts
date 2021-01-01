import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { message } from './message.entity';

@Injectable()
export class MessageService {

    constructor(@InjectRepository(message) private messageRepository: Repository<message>) { }

    async getAllMessage(): Promise<message[]> {
        return await this.messageRepository.find();
    }

    getOneMessage(id): Promise<message> {
        return this.messageRepository.findOne(id);
    }

    async writeMessage(msg: message) {
        return this.messageRepository.save(msg);
    }

    getremoveMessage(id: number){
        this.messageRepository.delete(id);
    }


    async getupdateMesage(id: number, msg: message){
        const updateId = this.messageRepository.findOne(id);

        if (!updateId){
            throw new NotFoundException ("Message id is not found");
        }

        (await updateId).message_id = msg.message_id;
        (await updateId).message_body = msg.message_body;
        (await updateId).status = msg.status;

        (await updateId).save();
        return updateId;
    }
}

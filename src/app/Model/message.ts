export class NewMessage {
    public senderId: string;
    public message: string;
    public recipientId: string;
    public image: string;
    public isSessionEnd: boolean;
    public rating: number;
    public review: string;
    public timestamp: number = Number(new Date());
    public file: any = {};
}
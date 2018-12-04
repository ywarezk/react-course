

export default class MessageService {
    private static instance: MessageService;

    public static getInstance(): MessageService {
        if (!this.instance) {
            this.instance = new this();
        }
        return this.instance;
    }

    public listen = (cb: (msg: string) => void) => {
        addEventListener('sendMessage', (event: CustomEvent) => {
            cb(event.detail);
        })
    }

    public send = (msg: string) => {
        dispatchEvent(new CustomEvent('sendMessage', {
            detail: msg
        }))
    }

    private constructor() {}
}

type MessageTypes = 
    'appState'      // Incoming
    | 'message';    // Outgoing

export class Message {
    readonly type: MessageTypes;
    readonly data: any;
}

type ServiceBusCallback = (msg: Message) => void;

export class ServiceBus {

    private callbacks: ServiceBusCallback[] = [];

    send(msg: Message): void {
        this.callbacks.forEach(cb => {
            cb(msg);
        })
    }

    register(fn: ServiceBusCallback): void {
        this.callbacks.push(fn);
    }
    
    registerFor(type: MessageTypes, fn: ServiceBusCallback): void {
        this.callbacks.push(msg => {
            if (msg.type !== type) return;
            fn(msg);
        })
    }

}
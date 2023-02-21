import {Inject, Injectable} from 'injection-js';
import 'reflect-metadata';

// @Injectable()
// export abstract class AuthService {
//     abstract name: string;
// }

// @Injectable()
// export class AuthServiceAAA implements AuthService {
//     name = 'AAA';
// }

// @Injectable()
// export class AuthServiceBBB implements AuthService {
//     name = 'BBB';
// }

// @Injectable()
// export abstract class DialogService {
//     constructor(authService: AuthService) {}
//     abstract confirm(message: string): void;
// }

// @Injectable()
// export class WxDialogService implements DialogService {
//     constructor(@Inject(AuthService) private authService: AuthService) {}
//     confirm(message: string): void {
//         console.log(`我是微信===${message} --- ${this.authService.name}`);
//     }
// }

// @Injectable()
// export class EmailDialogService implements DialogService {
//     constructor(@Inject(AuthService) private authService: AuthService) {}

//     confirm(message: string): void {
//         console.log(`我是email===${message} --- ${this.authService.name}`);
//     }
// }

// @Injectable()
// export class OrderService {
//     constructor(@Inject(DialogService) private dialogService: DialogService) {}

//     test() {
//         console.log('order service test');
//         return {haha: 1};
//     }

//     confirmOrder(message: string): void {
//         console.log(this.dialogService);
//         this.dialogService.confirm(message);
//     }
// }

// @Injectable()
// export class LoginService {
//     constructor(private orderService: OrderService) {}

//     login(message: string): void {
//         console.log(this.orderService.test());
//         this.orderService.confirmOrder(message);
//     }
// }
@Injectable()
export abstract class AuthService {
    abstract name: string;
}

@Injectable()
export class AuthServiceAAA implements AuthService {
    name = 'AAA';
}

@Injectable()
export class AuthServiceBBB implements AuthService {
    name = 'BBB';
}

@Injectable()
export abstract class DialogService {
    // private readonly authService!: AuthService;
    abstract confirm(message: string): void;
}

@Injectable()
export class WxDialogService implements DialogService {
    // @Inject(AuthService)
    // private readonly authService!: AuthService;
    // // constructor(authService: AuthService) {}
    // confirm(message: string): void {
    //     console.log(`我是微信===${message} --- ${this.authService.name}`);
    // }
    confirm(message: string): void {
        console.log(message, 1);
    }
}

@Injectable()
export class EmailDialogService implements DialogService {
    @Inject(AuthService)
    private readonly authService!: AuthService;

    confirm(message: string): void {
        console.log(`我是email===${message} --- ${this.authService.name}`);
    }
}

@Injectable()
export class OrderService {
    // @Inject(DialogService) private readonly dialogService!: DialogService;
    constructor(private readonly dialogService: DialogService) {}

    test() {
        console.log('order service test');
        return {haha: 1};
    }

    confirmOrder(message: string): void {
        // console.log(this.dialogService);
        console.log(this.dialogService);
        // this.dialogService = 1;
        console.log(this);
        console.log(message);
        // this.dialogService.confirm(message);
    }
}

@Injectable()
export class LoginService {
    @Inject(OrderService)
    private readonly orderService!: OrderService;

    login(message: string): void {
        console.log(this.orderService);
        this.orderService.confirmOrder(message);
    }
}

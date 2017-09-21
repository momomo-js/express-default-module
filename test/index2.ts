import {Component, Controller, Instance, Method, Module, MoServer, Option, Router, RouterManager} from '@mo/core';
import {Injectable} from 'injection-js';
import {ArrayType, Express, ExpressServer, GET, Params, POST, Query, ResponseHandler} from '@mo/express';
import {ExpressDefaultPluginPackage} from '../src/index';
import {CorsOptions} from 'cors';


class IndexModel {
    test = Number;
    haha = Number;
}

class NewIndexModel {
    @Query
    @ArrayType(Number)
    test: number[];

    @Params
    ts: number;

    @Query
    yy: number;
}


@Controller({
    models: [
        IndexModel,
        NewIndexModel
    ],
    path: '/'
})
class IndexController {

    @Method(GET, '/')
    @Express({
        responds: [{
            status: 1,
            message: '完成响应'
        }]
    })
    async index(model: IndexModel, res: ResponseHandler): Promise<ResponseHandler> {
        res.status(1).body(model);
        return res;
    }

    @Method(POST, '/:ts')
    @Express({
        responds: [{
            status: 1,
            message: '完成响应'
        }]
    })
    post(model: NewIndexModel, res: ResponseHandler): ResponseHandler {
        res.status(1).body(model);
        return res;
    }
}

@Router({
    controllers: [
        IndexController
    ]
})
class IndexRouter {
}

@Injectable()
class TestComponent extends Component {

    constructor(public router: RouterManager) {
        super();
    }

    onInit(): void {
        this.debug(`testing onInit...`);
        this.debug(`${this.router.constructor.name}`)
    }

    onStart(): void {
        this.debug(`testing onStart...`);

    }

    onStop(): void {
    }

}

@Module({
    plugins: [],
    components: [TestComponent]
})
class TestModule {
}


@Instance({
    servers: [ExpressServer],
    modules: [TestModule, TestModule],
    routers: [IndexRouter],
    components: [TestComponent, TestComponent],
    plugins: [ExpressDefaultPluginPackage],
    instance: {
        name: 'TEST',
        host: 'localhost',
        port: 3000
    }
})
class TestInstance {
    @Option('cors-option')
    cors: CorsOptions = {
        origin: '123'
    }
}

MoServer
    .create(TestInstance)
    .then(value => value.startSever());

/**
 * Created by yskun on 2017/7/8.
 */

import { Context } from "@oak/oak/context"
import { Next } from "@oak/oak/middleware";

export async function unhandledException(context: Context, next: Next): Promise<void>{
    try {
        await next();
    } catch (error: any) {
        context.response.status = 500;
        context.response.body = {
            code: 500,
            informationText:"Internal server error"
        }
    }
}
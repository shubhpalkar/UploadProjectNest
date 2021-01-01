import { Body, Controller, ParseIntPipe, Post } from '@nestjs/common';
import { Get, Param, UploadedFile, UseInterceptors } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { FilesInterceptor } from '@nestjs/platform-express/multer';
import { get } from 'http';
import { from } from 'rxjs';
import { imageFileFilter } from './file-upload.utils';
import { User } from './user.entity';
import { UserService } from './user.service';
import { diskStorage} from 'Multer';

@Controller('user')
export class UserController {

    constructor(private service: UserService) { }

    @Post()
    RegisterUser(@Body() user: User) {
        this.service.RegisterData(user);
    }

    @Get()
    async AllUser() {
        return this.service.getAllData();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id) {
        return this.service.findOne(id);
    }


    // @Post('upload')
    // @UseInterceptors(
    //     FilesInterceptor('image'));

    //  uploadFile(@UploadedFile() file) {
    //     const response = {
    //         originalname: file.originalname,
    //         filename: file.filename,
    //       };
    //       return response;
    //     console.log("file uploaded successfully ", file);
    // }


    @Post("upload")
    @UseInterceptors(FileInterceptor("photo", { dest: "./uploads" }))
    uploadSingle(@UploadedFile() file) {
      console.log(file);
    }

//     @Post('upload')
//     @UseInterceptors(
//         FileInterceptor('image',{
//             storage: diskStorage({
//                 destination: './files',
//         // filename: editFileName,
//       }),
//       fileFilter: imageFileFilter,
//     }),
//   )
//     async uploadedFile(@UploadedFile() file) {
//         const response = {
//             originalname: file.originalname,
//             filename: file.filename,
//         };
//         return response;
//     }
}

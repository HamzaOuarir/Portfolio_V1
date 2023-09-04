<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddTool;
use App\Models\Tool;
use Illuminate\Http\Request;

class ToolCont extends Controller
{
    //
    public function addTool(AddTool $req){
        $tool=new Tool();

        $file = $req->file('fileTool');
        $img_name=time().'_'.$file->getClientOriginalName();
        $file->move(public_path('ImgUploads'),$img_name);

        $tool->Name = $req->NameTool;
        $tool->image = $img_name;
        $tool->Pro_Id = $req->idPro;
        $tool->save();

    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddProjectReq;
use App\Models\Project;
use App\Models\Tool;
use Illuminate\Http\Request;

class ProjectCont extends Controller
{
    public function index(){
        $pro=Project::all();
        $tol=Tool::all();
        return ['pro'=>$pro,'tol'=> $tol];
    }
    public function addAroject(AddProjectReq $req){
        $prooo=new Project();

        $file = $req->file('filePro');
        $img_name=time().'_'.$file->getClientOriginalName();
        $file->move(public_path('ImgUploads'),$img_name);

        $prooo->Name = $req->NameP;
        $prooo->Description = $req->Desc;
        $prooo->image = $img_name;
        $prooo->link = $req->link;
        $prooo->save();
        return $prooo;

    }

    public function delProject($id){
        $pro=Project::find($id);
        $tol=Tool::where("Pro_Id",$id)->get();

        foreach ($tol as $t) {
            if (file_exists(public_path('ImgUploads/') . $t->image)) {}
            unlink(public_path('ImgUploads/'). $t->image);
        $t->delete();}
        unlink(public_path('ImgUploads/'). $pro->image);

        $pro->delete();

        return ['msg'=>$pro->Name.' has been deleted!'];    }
}

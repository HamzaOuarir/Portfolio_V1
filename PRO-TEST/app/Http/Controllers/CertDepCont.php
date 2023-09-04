<?php

namespace App\Http\Controllers;

use App\Http\Requests\CertDepReq;
use App\Models\CertDep;
use Illuminate\Http\Request;

class CertDepCont extends Controller
{
    //
    public function index(){
        $cert=CertDep::all();

        return $cert;
    }
    public function addDep(CertDepReq $req){
        $dp=new CertDep();

        $file = $req->file('imgDep');
        $img_name=time().'_'.$file->getClientOriginalName();
        $file->move(public_path('ImgUploads'),$img_name);
        $dp->Name = $req->NameDp;
        $dp->title = $req->titleDp;
        $dp->date=$req->dateDp;
        $dp->image=$img_name;

        $dp->save();
        return $dp;
    }

    public function delDeplo($id){
    $dep=CertDep::find($id);
    if (file_exists(public_path('ImgUploads/') . $dep->image)) {
        unlink(public_path('ImgUploads/'). $dep->image);
    }
        $dep->delete();
        return ['msg'=>$dep->Name.' has been deleted!'];}
}

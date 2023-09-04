<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddSkill;
use App\Models\Skill;
use Illuminate\Http\Request;

class SkillCont extends Controller
{
    //
    public function index(){
        return Skill::all();
    }

    public function addSkill(AddSkill $req){
        $skl=new Skill();

        $file = $req->file('fileSk');
        $img_name=time().'_'.$file->getClientOriginalName();
        $file->move(public_path('ImgUploads'),$img_name);

        $skl->Name = $req->NameS;
        $skl->image = $img_name;

        $skl->save();
        return $skl;
    }

    public function delSkill($id){
        $skill=Skill::find($id);
        if (file_exists(public_path('ImgUploads/') . $skill->image)) {
        unlink(public_path('ImgUploads/'). $skill->image);
    }
        $skill->delete();
        return ['msg'=>$skill->Name.' has been deleted!'];}












}

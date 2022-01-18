<?php
namespace app\admin\controller;

class Dyxs2 extends Base
{
    public function dyxs2set()
    {
        if (Request()->isPost()) {
            $config = input();
            $config_new['dycms'] = $config['dycms'];

            $config_old = config('dyxsst');
            $config_new = array_merge($config_old, $config_new);

            $res = mac_arr2file(APP_PATH . 'extra/dyxsst.php', $config_new);
            if ($res === false) {
                return $this->error('保存失败，请重试!');
            }
            return $this->success('保存成功!');
        };
        $this->assign('config', config('dyxsst'));
        return $this->fetch('admin@system/dycms');
    }

}

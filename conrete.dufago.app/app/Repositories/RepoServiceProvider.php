<?php

namespace App\Repositories;

use Illuminate\Support\ServiceProvider;

class RepoServiceProvider extends ServiceProvider
{

    public function register()
    {
        $this->app->bind(
            //ModelRepositoryInterface::class,
            //ModelRepository::class,
        );
    }
}

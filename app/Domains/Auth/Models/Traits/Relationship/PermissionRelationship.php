<?php

namespace App\Domains\Auth\Models\Traits\Relationship;

/**
 * Class PermissionRelationship.
 */
trait PermissionRelationship
{
    /**
     * @return mixed
     */
    public function parent()
    {
        return $this->belongsTo(self::class, 'parent_id')->with('parent');
    }

    /**
     * @return mixed
     */
    public function children()
    {
        return $this->hasMany(self::class, 'parent_id')->with('children');
    }
}

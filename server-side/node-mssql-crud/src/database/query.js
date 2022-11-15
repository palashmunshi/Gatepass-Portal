export const queries = {
    getAllUser: 'SELECT * FROM [gps_db].[gps_db].[gps_usersmaster]',
    addUser: 
        'INSERT INTO [gps_db].[gps_db].[gps_usersmaster] (user_id,ad_user_name,email_id,contact_number,group_id,role_id,subgroup_id,name,room_no,address,p_number,punch_id,change_flag,hostel,hostel_tower,status,photo) VALUES (@user_id,@ad_user_name,@email_id,@contact_number,@group_id,@role_id,@subgroup_id,@name,@room_no,@address,@p_number,@punch_id,@change_flag,@hostel,@hostel_tower,@status,@photo)',
    getUserById: 'SELECT * FROM [gps_db].[gps_db].[gps_usersmaster] WHERE user_id=@user_id', 
    deleteUser:'DELETE FROM [gps_db].[gps_db].[gps_usersmaster] WHERE user_id=@user_id',
    getTotalUser: 'SELECT COUNT(*) FROM [gps_db].[gps_db].[gps_usersmaster]',
    updateUserById: 
        'UPDATE [gps_db].[gps_db].[gps_usersmaster] SET ad_user_name=@ad_user_name,email_id=@email_id,contact_number=@contact_number,group_id=@group_id,role_id=@role_id,subgroup_id=@subgroup_id,name=@name,room_no=@room_no,address=@address,p_number=@p_number,punch_id=@punch_id,change_flag=@change_flag,hostel=@hostel,hostel_tower=@hostel_tower,status=@status,photo=@photo WHERE user_id=@user_id',
};
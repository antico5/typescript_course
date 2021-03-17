var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["SALES"] = 1] = "SALES";
    Role[Role["USER"] = 2] = "USER";
    Role[Role["OTHER"] = 99] = "OTHER";
})(Role || (Role = {}));
var person = {
    name: 'armando',
    role: Role.OTHER
};
console.log(person);

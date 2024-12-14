using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Spectra.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class PermissoinBaseUpdate2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PermissoinCategoryId",
                table: "RolePermissions",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PermissoinGroupId",
                table: "RolePermissions",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PermissoinId",
                table: "RolePermissions",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PermissoinCategoryId",
                table: "RolePermissions");

            migrationBuilder.DropColumn(
                name: "PermissoinGroupId",
                table: "RolePermissions");

            migrationBuilder.DropColumn(
                name: "PermissoinId",
                table: "RolePermissions");
        }
    }
}
